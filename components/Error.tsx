interface IProps {
    message: string
    type?: 'component' | 'global'
}

const Error = ({ message, type }: IProps) => {
    return <div>{message}</div>
}

export default Error
