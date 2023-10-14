import Table from "./components/Table";
import { calculateClasswiseStatistics } from "./constants";
import dataSet from "./dataSet.json";
import "./styles.css";

function App() {
  // Calculate class-wise statistics for the dataset
  const classwiseStatistics1 = calculateClasswiseStatistics(
    dataSet,
    "Flavanoids"
  );

  const updatedDataSet = dataSet?.map((el) => {
    return {
      ...el,
      [`Gamma`]: Number(
        parseFloat((el?.Ash * el?.Hue) / el?.Magnesium).toFixed(3)
      ),
    };
  });

  const classwiseStatistics2 = calculateClasswiseStatistics(
    updatedDataSet,
    "Gamma"
  );

  return (
    <div>
      <Table
        data={classwiseStatistics1}
        type="Flavanoids"
        caption="class-wise mean, median, mode of
“Flavanoids” for the entire dataset."
      />
      <Table
        data={classwiseStatistics2}
        type="Gamma"
        caption="New property “Gamma” for each point of
the dataset. “Gamma” can be calculated as Gamma = (Ash * Hue) / Magnesium.
Thereafter, calculate the class-wise mean, median, mode of “Gamma” for the
entire dataset."
      />
    </div>
  );
}

export default App;
