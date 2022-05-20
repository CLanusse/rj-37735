import './Container.scss'

const Container = ( {children} ) => {

    return (
        <div className="my-container">
            {children}
        </div>
    )
}

export default Container