const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    );
};

export default Loading;