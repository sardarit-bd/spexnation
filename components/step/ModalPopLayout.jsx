
const ModalPopLayout = ({ children }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600/50 bg-opacity-50 flex items-center justify-center z-50">
            {children}
        </div>
    )
}

export default ModalPopLayout;