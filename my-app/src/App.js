import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const url = "https://api.publicapis.org/entries";

  //*!>>>>>>>>>>>>>>>>>>>>>GET REQUEST<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< *//
  const getProducts = async () => {
    try {
      let request = await fetch(url);
      return await request.json().then((data) => {
        setData(data.entries);
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    getProducts();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  }, [data]);

  // let categoryArr = [];
  // let newObj = {};
  // data.forEach((element) => {
  //   categoryArr.push(element.Category);
  // });
  // let pureCategoryArr = [...new Set(categoryArr)];
  // pureCategoryArr.forEach((str) => {
  //   newObj[`${str}`] = data.filter((item) => item.Category === str);
  // });
  // console.log(newObj);

  // console.log(pureCategoryArr);

  // console.log(categoryArr);

  return (
    <div>
      <h1>Public API</h1>

      <div className="container">
        <div className="category">
          <h2>Category:Animals </h2>

          {data
            .filter((item) => item.Category === "Animals")
            .map((item) => (
              <div key={item.API} className="category_item">
                <li>{item.API}</li>
                <li>{item.Description}</li>
                <li>{item.Link}</li>
              </div>
            ))}
        </div>

        <div className="category">
          <h2>Category:Books</h2>

          {data
            .filter((item) => item.Category === "Books")
            .map((item) => (
              <div key={item.API} className="category_item">
                <li>{item.API}</li>
                <li>{item.Description}</li>
                <li>{item.Link}</li>
              </div>
            ))}
        </div>

        <div className="category">
          <h2>Category:Government</h2>

          {data
            .filter((item) => item.Category === "Government")
            .map((item) => (
              <div key={item.API} className="category_item">
                <li>{item.API}</li>
                <li>{item.Description}</li>
                <li>{item.Link}</li>
              </div>
            ))}
        </div>

        <div className="category">
          <h2>Category:Other Categories</h2>

          {data
            .filter((item) => item.Category !== "Animals" && item.Category !== "Books" && item.Category !== "Government")
            .map((item) => (
              <div key={item.API} className="category_item">
                <li>{item.API}</li>
                <li>{item.Description}</li>
                <li>{item.Link}</li>
              </div>
            ))}
        </div>
      </div>
      {/* 
      <table>
        <thead>
          <tr>
            <th>Category:Animals</th>
            <th>Category:Books</th>
            <th>Category:Government</th>
            <th>Other Categories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            {data.map((item) => {
              if (item.Category === "Animals") {
                return (
                  <div key={item.API} className="d-flex flex-column">
                    <div>{item.API}</div>
                    <div>{item.Description}</div>
                    <div>{item.Link}</div>
                    <hr />
                  </div>
                );
              }
            })}
         </td>
            <td>
            {data.map((item) => {
              if (item.Category === "Books") {
                return (
                  <div key={item.API} className="d-flex flex-column">
                    <div>{item.API}</div>
                    <div>{item.Description}</div>
                    <div>{item.Link}</div>
                    <hr />
                  </div>
                );
              }
            })}
            </td>
            <td>
            {data.map((item) => {
              if (item.Category === "Government") {
                return (
                  <div key={item.API} className="d-flex flex-column">
                    <div>{item.API}</div>
                    <div>{item.Description}</div>
                    <div>{item.Link}</div>
                    <hr />
                  </div>
                );
              }
            })}
            </td>
          </tr>

        </tbody>
      </table> */}
    </div>
  );
};

export default App;
