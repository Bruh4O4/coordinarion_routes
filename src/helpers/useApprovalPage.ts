import { useState /*, useEffect */ } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { DecisionAction, RequestWithAnalytics } from '../types/interface';
import { MOCK_REQUESTS } from '../mocks/mockData';
// import { requestsApi } from '../api/requestsApi';

export const useApprovalPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Вычисляем начальные данные сразу при инициализации useState (без лишнего useEffect)
  const initialRequest = id
    ? MOCK_REQUESTS.find((r) => r.id === id) || MOCK_REQUESTS[0] || null
    : null;

  const [request, setRequest] = useState<RequestWithAnalytics | null>(initialRequest);
  const [comment, setComment] = useState(initialRequest?.comment || '');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  void setRequest;
  void setIsLoading;

  /* === ПОДКЛЮЧЕНИЕ API (раскомментировать при возврате requestsApi) ===
  useEffect(() => {
    if (!id) return;
    let isMounted = true;
    setIsLoading(true);

    requestsApi
      .getById(id)
      .then((data) => {
        if (!isMounted) return;
        if (data) {
          setRequest(data);
          setComment(data.comment || '');
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  ==================================================================== */

  const goBackToList = () => {
    const targetPath = request?.type === 'trip' ? '/employer/business-trips' : '/employer/vacations';
    navigate(targetPath);
  };

  const handleDecision = async (decision: DecisionAction) => {
    if (!request) return;
    setIsSubmitting(true);
    try {
      void decision;
      // await requestsApi.sendDecision(request.id, { decision, comment });
      goBackToList();
    } catch {
      alert('Ошибка при отправке решения');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    request,
    comment,
    setComment,
    isLoading,
    isSubmitting,
    goBackToList,
    handleDecision,
  };
};
