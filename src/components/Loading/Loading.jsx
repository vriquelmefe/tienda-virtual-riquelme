const Loading = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-dark" type="button" disabled>
                <span className="spinner-border text-danger mr-4" role="status" aria-hidden="true"></span>
                Cargando producto escogido...
            </button>
        </div>
    );
};

export default Loading;