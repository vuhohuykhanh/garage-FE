const SlideContent = (img, content) => {
  return (
    <>
      <div className="mySlides fade">
        <img alt={img} src={img} style={{ width: '100%', height: '652px' }} />
        <div className="slide-content">
          <h1>{content.content_head}</h1>
          <p style={{ textTransform: 'uppercase' }}>
            {content.content_head_child}
          </p>
          <p>{content.content}</p>
        </div>
      </div>
    </>
  );
};

export default SlideContent;
