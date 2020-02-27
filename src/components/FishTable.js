import FishTableRow from './FishTableRow.js';



var FishTable = ({fishes}) => {
  // console.log(fishes)
  return (
    <table>
      <tbody>
        {fishes.map((fish, key) => (
          <FishTableRow
            key={key}
            fish={fish}
            name={fish.name}
            image={fish.image}
            description={fish.description}
          />
        ))}
      </tbody>
    </table>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

export default FishTable;
