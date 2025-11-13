const Headlayout = ({ children }) => {
    return (<html>
        <body className="fixed">

            <div className="fixed">
                {children}
            </div>

        </body>
    </html>



    );
}

export default Headlayout;