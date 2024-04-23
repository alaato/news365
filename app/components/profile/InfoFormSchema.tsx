import * as yup from "yup"

const Formschema = yup.object().shape({
    FirstName: yup.string().required("الاسم ضروري"),
    LastName: yup.string(),
    Email: yup.string().email("يجب ادخال بريد الالكتروني صحيح").required("البريد الالكتروني ضروري"),
    Avatar: yup.mixed()
})

export default Formschema;