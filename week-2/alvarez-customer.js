/*
============================================
; Title:  alvarez-customer.js
; Author: Professor Krasso
; Date:   26 October 2020
; Modified by: Karina Alvarez
; Description: 
;===========================================
*/

//a CUSTOMER can have many INVOICEs
//many INVOICEs can be assigned to one CUSTOMER
//an INVOICE can have many LINE_ITEMs
//many LINE_ITEMs can be associated with one INVOICE
var nodeShopper = {
    customer: [
       {
            _id: 1.1,
            first_name: "Karina",
            last_name: "Alvarez",
            date_of_birth: "01/21/1990",
            user_name: "kalvarez",

       invoices: [
        {
            id: 101,
            date_created: "10/20/2020",
            date_shipped: "10/22/2020",
            subtotal: 1250.00,
            tax: 75,
            total: 1325.00
        },

        {
            id: 105,
            date_created: "10/26/2020",
            date_shipped: "10/30/2020",
            subtotal: 1100.00,
            tax: 66,
            total: 1166.00
        },

        {
            id: 102,
            date_created: "10/20/2020",
            date_shipped: "10/22/2020",
            subtotal: 950.00,
            tax: 57,
            total: 1007.00,

            line_items: [
                {
                     _id : 1001,
                     name : "lavender",
                     price: 325.00,
                     quantity: 1
                },
                {
                    _id: 1003,
                    name: "rosemary",
                    price: 150.00,
                    quantity: 3
               }
             ]
        },

        ]
    }]
    
}
