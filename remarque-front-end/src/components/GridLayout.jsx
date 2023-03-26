import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const styles = {
  border: {
    borderColor: "#000000",
    borderWidth: 5,
  },
};

const MyFirstGrid = () => {
  // const [layoutState, setLayoutState] = useState(['John', 'Grace', 'Jared']);

  const layout = {lg:[
    { i: "a", x: 0, y: 0, w: 6, h: 2},
    { i: "b", x: 3, y: 4, w: 6, h: 4},
]
};
  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 4, md: 10, sm: 6, xs: 4, xxs: 2 }}
      margin={[0, 0]}
      compactType= {"horizontal"}
    >
      <div key="a" style={styles.border}>
        a
      </div>
      <div key="b" style={styles.border}>
        b
      </div>
    </ResponsiveGridLayout>
  );
};
export default MyFirstGrid;
