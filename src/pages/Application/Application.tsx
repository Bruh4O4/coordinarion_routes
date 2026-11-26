import styles from './Application.module.css';
import { List } from "../../components/List/List";
import { RequestCard } from "../../modules/RequestCard/RequestCard";

const onClick = () => {

}

export function Application() {
    return (
        <>
            <div className={styles.body}>
                <List>
                    <RequestCard onClick={onClick}></RequestCard>
                    <RequestCard onClick={onClick}></RequestCard>
                    <RequestCard onClick={onClick}></RequestCard>
                    <RequestCard onClick={onClick}></RequestCard>
                    <RequestCard onClick={onClick}></RequestCard>
                    <RequestCard onClick={onClick}></RequestCard>
                </List>
            </div>
        </>
    )
}