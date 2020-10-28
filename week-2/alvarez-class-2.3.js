/*
============================================
; Title:  alvarez-class-2.3.js
; Author: Professor Krasso
; Date:   26 October 2020
; Modified by: Karina Alvarez
; Description: 
;===========================================
*/

//a CLASS may ENROLL many STUDENTS
// a STUDENT may ENROLL in many CLASSes
var NodeTech = {
    class: [{
      _id: 91847,
      name: " Web-335",
  
      enroll: [{
        _id: 356275,
        grade: "Sophomore",
  
        students: [{
            _id: 53794568,
            first_name: "Karina",
            last_name: "Alvarez",
            mi: "B"
          },
          {
            _id: 28295713,
            fist_name: "John",
            last_name: "Williams",
            mi: "C"
          },
          {
            _id: 36789531,
            first_name: "Mathew",
            last_name: "Smith",
            mi: "A",
  
            enroll: [{
              _id: 1478963,
              grade: "Junior",
  
              class: [{
                  _id: 123654,
                  name: "Web-420"
                },
                {
                  _id: 987321,
                  name: "Web-450"
                }
              ]
            }]
          }
        ]
      }]
    }],
  }
  