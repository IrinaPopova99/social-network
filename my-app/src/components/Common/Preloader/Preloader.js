import loadingImage from "./../../../assets/images/loading.gif";

const Preloader = (props) => {
    return (
        <div className="photo-mini"><img src={loadingImage} alt="loading..."/></div>
    );
}

export default Preloader;