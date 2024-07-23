export default function LinkCard({ linkdetails }){
    return (
        <div
            className="link_container"
        >
            <p
                className="fw-700"
            >
                { linkdetails.title }
            </p>
        </div>
    )
}