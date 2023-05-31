import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatable/Datatable"

const ProductList = () => {
  const productsData = {
    tableHeader: ["Name", "Password", "Email Address"],
    tableBody: [
      {
        name: "Product1",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product2",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product3",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product4",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product5",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product6",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product7",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product8",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product9",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product10",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product11",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product12",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product13",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product14",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product15",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product16",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product17",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product18",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product19",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product20",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product1",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product2",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product3",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product4",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product5",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product6",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product7",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product8",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product9",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product10",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product11",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product12",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product13",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product14",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product15",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product16",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product17",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product18",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product19",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
      {
        name: "Product20",
        pass: "0000",
        email: "ha@123.gmail.com"
      },
    ]
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        {/* <Navbar/> */}
        <Datatable tableTitle="Products" tableData={productsData}
        />
      </div>
    </div>
  )
}

export default ProductList