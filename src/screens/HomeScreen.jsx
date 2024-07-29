import '../component/style.css'

export default function HomeScreen() {
  const text = "더 나은 \n내일의 우리를 위해"

  return (
    <div>
      <h1>Home Screen</h1>
      <h3 style = {{textAlign:"left",paddingLeft: 10,whiteSpace: "pre-wrap"}}>
        {text}
      </h3>
      <div className = 'frame-12'>
        test
      </div>
    </div>
  );
}