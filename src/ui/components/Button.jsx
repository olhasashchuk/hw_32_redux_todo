export function Button (props) {
    const { children, className, checked, onClick, disabled } = props;
    return <button className={`btn ${className}`} style={{ textDecoration: checked ? 'line-through' : 'initial' }}
                   onClick={onClick}
                   disabled={disabled}>
        {children}
    </button>
}