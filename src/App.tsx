import React, { createRef } from 'react';

function App() {
  const firstDivRef = createRef<HTMLDivElement>();
  const secondDivRef = createRef<HTMLDivElement>();
  const thirdDivRef = createRef<HTMLDivElement>();

  function handleScrollToFirstDiv() {
    firstDivRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondDiv() {
    secondDivRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdDiv() {
    thirdDivRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <section onClick={handleScrollToFirstDiv}>First Section</section>
        <section onClick={handleScrollToSecondDiv}>Second Section</section>
        <section onClick={handleScrollToThirdDiv}>Third Section</section>
      </nav>
      <div>
        <div
          style={{
            height: '80vh',
            backgroundColor: '#f0f0f0',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          ref={firstDivRef}
        >
          Content for the first section
        </div>
        <div
          style={{
            height: '80vh',
            backgroundColor: '#f0f0f0',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          ref={secondDivRef}
        >
          Content for the second section
        </div>
        <div
          style={{
            height: '80vh',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          ref={thirdDivRef}
        >
          Content for the third section
        </div>
      </div>
    </>
  );
}

export default App;
