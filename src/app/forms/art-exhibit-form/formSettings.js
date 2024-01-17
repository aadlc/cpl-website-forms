// Importing the 'yup' library for schema validation
import * as yup from 'yup'

// Default form values for an artist's application
const defaultValues = {
  Additional_Links:'',
  Applicants:'',
  Artist_Address:'',
  Artist_Name:'',
  Email:'',
  Library_Branch:null,
  Phone:'',
  Statement:'',
}
// Array of branch codes
const disabeledLocations = [
  'CENT',
  'FISH',
  'FLAWN',
  'GIUFFRE', 
  'MPARK', 
  'NICHOLLS', 
  'NOSE', 
  'QUARRY', 
  'ROCKY', 
  'SADDLE',
  'SAGE', 
  'VILSQ', 
]
const locations = [
    {
      id: 16,
      ProgramBranchid: 16,
      Code: 'BOW',
      Name: 'Bowness Library',
      Sector: 'Northwest'
    },
    {
      id: 1,
      ProgramBranchid: 1,
      Code: 'CENT',
      Name: 'Central Library',
      Sector: 'Centre'
    },
    {
      id: 15,
      ProgramBranchid: 15,
      Code: 'CHILL',
      Name: 'Country Hills Library',
      Sector: 'North'
    },
    {
      id: 14,
      ProgramBranchid: 14,
      Code: 'CROW',
      Name: 'Crowfoot Library',
      Sector: 'Northwest'
    },
    {
      id: 13,
      ProgramBranchid: 13,
      Code: 'FISH',
      Name: 'Fish Creek Library',
      Sector: 'South'
    },
    {
      id: 12,
      ProgramBranchid: 12,
      Code: 'FLAWN',
      Name: 'Forest Lawn Library',
      Sector: 'East'
    },
    {
      id: 17,
      ProgramBranchid: 17,
      Code: 'GIUFFRE',
      Name: 'Giuffre Family Library',
      Sector: 'Centre'
    },
    {
      id: 3,
      ProgramBranchid: 3,
      Code: 'UMBACH',
      Name: 'Judith Umbach Library',
      Sector: 'North'
    },
    {
      id: 10,
      ProgramBranchid: 10,
      Code: 'RILEY',
      Name: 'Louise Riley Library',
      Sector: 'Centre'
    },
    {
      id: 9,
      ProgramBranchid: 9,
      Code: 'MPARK',
      Name: 'Memorial Park Library',
      Sector: 'Centre'
    },
    {
      id: 27,
      ProgramBranchid: 27,
      Code: 'NICHOLLS',
      Name: 'Nicholls Family Library',
      Sector: 'West'
    },
    {
      id: 8,
      ProgramBranchid: 8,
      Code: 'NOSE',
      Name: 'Nose Hill Library',
      Sector: 'Northwest'
    },
    {
      id: 11,
      ProgramBranchid: 11,
      Code: 'QUARRY',
      Name: 'Quarry Park Library',
      Sector: 'Southeast'
    },
    {
      id: 30,
      ProgramBranchid: 30,
      Code: 'ROCKY',
      Name: 'Rocky Ridge Library',
      Sector: 'Northwest'
    },
    {
      id: 20,
      ProgramBranchid: 20,
      Code: 'SADDLE',
      Name: 'Saddletowne Library',
      Sector: 'Northeast'
    },
    {
      id: 29,
      ProgramBranchid: 29,
      Code: 'SAGE',
      Name: 'Sage Hill Library',
      Sector: 'North'
    },
    {
      id: 31,
      ProgramBranchid: 31,
      Code: 'SETON',
      Name: 'Seton Library',
      Sector: 'Southeast'
    },
    {
      id: 6,
      ProgramBranchid: 6,
      Code: 'SHAW',
      Name: 'Shawnessy Library',
      Sector: 'South'
    },
    {
      id: 5,
      ProgramBranchid: 5,
      Code: 'SIG',
      Name: 'Signal Hill Library',
      Sector: 'West'
    },
    {
      id: 4,
      ProgramBranchid: 4,
      Code: 'SOUTH',
      Name: 'Southwood Library',
      Sector: 'South'
    },
    {
      id: 2,
      ProgramBranchid: 2,
      Code: 'VILSQ',
      Name: 'Village Square Library',
      Sector: 'Northeast'
    }
  ]


// Array of applicant types
const applicantTypes = [
  { label: 'Solo Artist', value: 'Solo Artist' },
  { label: 'Artist Group', value: 'Artist Group' }
]

// FRONT-END VALIDATION ---------------------------------

// Regular expression for validating phone numbers
const phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// Maximum file size limit for attachments (10 Megabytes)
const maxMB = 10000000
// yup schema for front-end validation of form inputs
const schema = yup.object().shape({
  // Each field in the form is validated with specific rules
  Artist_Name: yup
    .string()
    .required('Please enter a name. The field cannot be left blank.'),
  Artist_Address: yup
    .string()
    .required('Please enter an address. The field cannot be left blank.'),
  Phone: yup
    .string()
    .required('Please enter a valid phone number. The field cannot be left blank.')
    .matches(phoneRegEx, 'Phone number must be valid.'),
  Email: yup
    .string()
    .email()
    .required('Please enter an email address. The field cannot be left blank.'),
  Applicants: yup
    .string()
    .required('Please select an option. The field cannot be left blank.'),
  Statement: yup
    .string()
    .required('Please enter a statement. The field cannot be left blank.'),
  Library_Branch: yup
    .string()
    .required('Please select a location. The field cannot be left blank.'),
  // TODO
  // attachements: yup
  //   .mixed()
  //   .required('Please attach files.')
  //   .test('totalFiles', 'You must attach three samples files', (value) => {
  //     return value && Object.keys(value).length === 3
  //   })
  //   .test('fileType', 'The attached files must be one of the following extensions: .docx .jpeg, .jpg, .pdf or .png', (value) => {
  //     let ret = true
  //     if (value) {
  //       const allowed = ['vnd.openxmlformats-officedocument.wordprocessingml.document', 'jpeg', 'jpg', 'pdf', 'png']
  //       const keys = Object.keys(value)
  //       keys.forEach((key) => {
  //         const fileTypeStr = value[key].type
  //         const fileExt = fileTypeStr.split('/')[1].toLowerCase()
  //         if (fileExt !== allowed.find(item => item === fileExt)) {
  //           ret = false
  //         }
  //       })
  //     }
  //     return ret
  //   })
  //   .test('fileSize', 'One of the files exceeds the size limit of 10 megabyte', (value) => {
  //     let ret = true
  //     if (value) {
  //       const keys = Object.keys(value)
  //       keys.forEach((key) => {
  //         if (value[key].size > maxMB) {
  //           ret = false
  //         }
  //       })
  //     }
  //     return ret
  //   }),
  Additional_Links: yup
    .string()
    .url()
})

// Exporting the constants and schema for use in other modules
export {
  applicantTypes,
  defaultValues,
  disabeledLocations,
  locations,
  schema,
}