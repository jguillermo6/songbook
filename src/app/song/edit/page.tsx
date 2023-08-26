export default function Edit(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h5>
                        Song Name
                    </h5>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-primary btn-sm me-1">Small button</button>
                    <button type="button" className="btn btn-secondary btn-sm me-1"><i className="bi bi-arrow-up"></i></button>
                    <button type="button" className="btn btn-secondary btn-sm"><i className="bi bi-arrow-down"></i></button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                </div>
            </div>
        </div>
    )
}