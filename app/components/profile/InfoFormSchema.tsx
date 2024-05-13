import * as yup from "yup"

const Formschema = yup.object().shape({
    username: yup.string().required("الاسم ضروري"),
    Email: yup.string().email("يجب ادخال بريد الالكتروني صحيح").required("البريد الالكتروني ضروري"),
    Avatar: yup.mixed()
})

export default Formschema;