import React, { useState, useEffect } from "react";
import { init } from "commandbar";
import { useNavigate } from "react-router-dom";

init("18812614");

const useCommandBar = (loggedInUserId) => {
  const [catFact, setCatFact] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    window.CommandBar.boot(loggedInUserId);
    const router = (url) => navigate(url);
    window.CommandBar.addRouter(router);
  }, [loggedInUserId, navigate]);

  //   cat fact request
  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setCatFact(data.fact);
        return [{ fact: data.fact }];
      } catch (error) {
        console.error("Error fetching cat fact: ", error);
      }
    };

    fetchCatFact().then((fact) => {
      window.CommandBar.addArgumentChoices("fact", fact);
    });
  }, []);

  //   callback for cat fact
  useEffect(() => {
    window.CommandBar.addCallback("showCatFact", () => {
      if (catFact) {
        alert(catFact);
      } else {
        alert("No cat fact available.");
      }
    });
  }, [catFact]);

  // add a record and component
  // placeholder / example code to replace below
  useEffect(() => {
    window.CommandBar.addComponent("record-preview", "Basic Record Preview", {
      mount: (elem) => ({
        render: (data, metadata) => {
          elem.innerHTML =
            "<div>" +
            "<h3>" +
            data.label +
            "</h3>" +
            '<div><img src="' +
            data.photo +
            '" /></div>' +
            "</div>";
        },
        unmount: (elem) => {
          // ... add cleanup here
        },
      }),
    });

    window.CommandBar.addRecords("users", [
      {
        label: "John",
        id: "1",
        photos:
          "https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg",
      },
      {
        label: "Bernadette",
        id: "2",
        photos: "https://www.loudegg.com/wp-content/uploads/2020/10/Snoopy.jpg",
      },
      {
        label: "Jed",
        id: "3",
        photos:
          "https://www.loudegg.com/wp-content/uploads/2020/10/Donald-Duck.jpg",
      },
    ]);
  }, []);
};

export default useCommandBar;
