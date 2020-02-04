import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://gigapet2020.herokuapp.com',
        headers: {
            authentication: token
        }
    });
};

// ------LOGIN---------
// POST/api/auth/login
//  ---> BODY
    // {
    // “username”: <Parent’s username (string)>,
    // “password”: <Parent’s password (string)>
    // }
//  ----> RETURNS
    // {
    // “id”: <Parent’s Id (integer)>,
    // “username”: <Parent’s username (string)> ,
    // “token”: <Parent’s jwt token (string)>
    // }

// --------REGISTER-------
// POST/api/auth/register
// ---> BODY
    // {
    // “username”: <Parent’s username (string)>,
    // “password”: <Parent’s password (string)>
    // }
// ---> RETURNS
    // {
    // “id”: <Parent’s id (integer)>,
    // “username”: <Parent’s username (string)>,
    // “token”: <JWToken (string)>
    // }

//////////// AUTH ROUTES: REQUIRE TOKENS ///////////
// BASE URL: /api/parents

// -------ADD NEW CHILD--------
// POST /child
// ---> REQUIRED BODY:
    // {
    // “name”: <Child’s Name (string)>,
    // “parent_id”: <Parent’s Id (integer)>, (Parent id must already exist)
    // “parent_2_id”: <ID of 2nd parent if applicable (string)> (OPTIONAL) (Parent id must already exist)
    // }
// ---> RETURNS
    // {
    // “id”: <Child’s ID (integer)>,
    // “name”: <Child’s Name (string)>,
    // “parent_id”: <Parent’s ID (string)>
    // }

// -------RETRIEVE A PARENT'S CHILD / CHILDREN------
// GET /children/<:parentId (integer)>
// ---> RETURNS 
// Array of children in the following format: (parent_2 is in place for stretch functionality)
// [
// {
//     "id": 3,
//     "name": "Billy",
//     "parent_id": 1,
//     "parent_2_id": null
// },
// {
//     "id": 7,
//     "name": "Nancy",
//     "parent_id": 1,
//     "parent_2_id": null
// },
// ]

// ------ ADD FOOD ENTRY -------
// POST /api/parents/food/<:childId (integer)> (Child id must already exist)
// ---> BODY:
    // {
    // -- OPTIONAL --
    // “date”: <“yyyy-mm-dd” (string)>
    // (OMIT DATE TO AUTOMATICALLY USE CURRENT DATE)
    // “dairy”: <Units of Category Consumed (integer)>
    // “fruits”, “grains”, “proteins”, “vegetables”, “treats”
    // -- Work the same as dairy. Include as many or as few as desired.
    // (OMITTED FOOD CATEGORIES WILL DEFAULT TO ZERO) }
// ---> RETURNS
    // {
    // “child_id”: <ID of Child being recorded (integer)> ,
    // “id”: <Id of the food entry (integer)>,
    // “date”: <Date of the food entry (string)>
    // }
        // Example
        // {
        // “child_id”: 5,
        // “fruits”: 4,
        // “proteins”: 7
        // }
        // Is equivalent to:
        // {
        // “child_id”: 5,
        // “date”: “2020-02-01”, <---- The current date
        // “dairy”: 0,
        // “fruits”: 4,
        // “grains”: 0,
        // “proteins”: 7,
        // “vegetables”: 0,
        // “treats”: 0
        // }
        // And will return
        // {
        // “child_id”: 5,
        // “id”: 9,
        // “date”: “2020-02-01”
        // }

// ---- UPDATE FOOD ENTRY ----
// PUT /food/<:entryId (integer)> (Food entry id must already exist)
// ---> BODY: Follows same structure as POST endpoint above.

// --- DELETE FOOD ENTRY ---
// DELETE /food/<:entryId (integer)> (Food entry id must already exist)

//  --- GET FOOD ENTRIES FROM ALL PARENT's CHILDREN ----
// GET /food/parent/<:parentId (integer)> (Parent id must already exist)
// ---> RETURN:
//   An array of food entry objects
// 
// --- GET FOOD ENTRIES FROM DAILY, WEEKLY, MONTHLY TIME ---
// GET /entries/:child-id/:timespan?(optional query)
//  child-id:integer
//  timespan: (accepts DAY, WEEK, or MONTH) (Defaults to day)
//  Date defaults to current date without query.
//  To end timespan on a different date use query shape: ?date=yyyy-mm-dd
// ---> RETURN
//  An array of food entry objects