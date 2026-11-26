import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { RequestType, RequestWithAnalytics, DictionariesResponse } from '../types/interface';
import { MOCK_DICTIONARIES } from '../mocks/mockData';
import { getMockRequests } from '../api/mockApi';
// import { requestsApi } from '../../../api/requestsApi';

export const useVacations = (type: RequestType) => {
  const navigate = useNavigate();

  const [requests, setRequests] = useState<RequestWithAnalytics[]>([]);
  const [dictionaries, setDictionaries] = useState<DictionariesResponse>({
    departments: [],
    positions: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let isMounted = true;

    // Promise.all([requestsApi.getAll(), requestsApi.getDictionaries()])
    // .then(([reqsData, dictData]) => {
    Promise.all([getMockRequests()])
      .then(([reqsData]) => {
        if (!isMounted) return;
        setRequests(reqsData);
        setDictionaries(MOCK_DICTIONARIES);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredRequests = useMemo(() => {
    return requests
      .filter((req) => {
        if (req.type !== type) return false;
        if (department && req.employee.department !== department) return false;
        if (position && req.employee.position !== position) return false;
        if (search && !req.employee.fullName.toLowerCase().includes(search.toLowerCase())) {
          return false;
        }
        return true;
      })
      .sort((a, b) => (a.status === 'pending' ? -1 : b.status === 'pending' ? 1 : 0));
  }, [requests, type, department, position, search]);

  const handleSelectRequest = (id: string) => {
    navigate(`/employer/application/${id}`);
  };

  return {
    filteredRequests,
    dictionaries,
    isLoading,
    department,
    setDepartment,
    position,
    setPosition,
    search,
    setSearch,
    handleSelectRequest,
  };
};
