import type { ReactNode } from "react"
import styles from './List.module.css'

interface ListProps {
    children: ReactNode,
    className?: string
}

export function List({ children, className = '' }: ListProps) {
    return (
        <div className={`${styles.list} ${className}`}>
            { children }
        </div>
    )
}