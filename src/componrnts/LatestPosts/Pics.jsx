import React from 'react'

const Pics = (props) => {
    const img = new Image();
    img.src = props.url;


    const [height, setHeight] = React.useState("100%");
    const [width, setWidth] = React.useState("100%");
    // console.log(props);
    return (
        <div>
            <img id={props.url.pk} src={props.url.url} alt="" height={height} width={width} onPointerOver={
                () => {
                    setHeight(100);
                    setWidth(100);
                }
            }
                onPointerOut={
                    () => {
                        setHeight("100%");
                        setWidth("100%");
                    }
                }
                onClick={
                    () => {
                        window.open("/post/" + props.url.pk)
                    }
                } />
        </div>
    )
}

export default Pics