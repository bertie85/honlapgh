export default (props) => (
    <section className={`col-${props.colSize || 12} ${props.addClass || ""} page-section`}>
        <h2>{props.title || ""}</h2>
        {props.children}
        <hr />
    </section>
)
