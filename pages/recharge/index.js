import Image from 'next/image'
import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AddToRechargeCart } from '../../store/actions/quantityChange'
import { RemoveFromRechargeCart } from '../../store/actions/quantityChange'

//component
import { Formik } from 'formik'

//svgs
import AirtimeSVG from "../../assets/svgs/airtime.svg"
import DataSVG from "../../assets/svgs/data.svg"
import AlertIcon from "../../assets/icons/alert-circle.svg"
import { list } from 'postcss'

function BuyData() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [inputList, setInputList] = useState([{ name: '', mobileNumber: '', amount: '', logo: ''}]);
    

    const Networks = [
        {
            id: 1,
            name: "MTN",
            logo: "https://res.cloudinary.com/kaydist/image/upload/v1647725221/Anybuy/carrierNetworks/MTN_Logo_ushgxq.svg"
        },
        {
            id: 2,
            name: "GLO",
            logo: "https://res.cloudinary.com/kaydist/image/upload/v1647725221/Anybuy/carrierNetworks/Globacom_Limited_Logo_xjvxnq.svg"
        },
        {
            id: 3,
            name: "AIRTEL",
            logo: "https://res.cloudinary.com/kaydist/image/upload/v1647725217/Anybuy/carrierNetworks/Airtel_Nigeria_Logo_holoyq.svg"
        },
        {
            id: 4,
            name: "9Mobile",
            logo: "https://res.cloudinary.com/kaydist/image/upload/v1647725219/Anybuy/carrierNetworks/9mobile_Logo_hikgqt.svg"
        }
    ]



    const handleSelectChange = (e, index) => {
        const { name, value, attributes} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        list[index].logo = attributes.logo.value;
        setInputList(list);                  
    };
    const handleChange = (e, index) => {
        const { name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);                  
    };

    const handleRemoveClick = (idx) => {
        // const list = [...inputList];
        let updatedList = inputList.filter((item, index) => idx !== index)
        setInputList(updatedList);     
    };

    const handleAddClick = (networkName) => {        
        dispatch(AddToRechargeCart(inputList))       
        setInputList([...inputList, { name: '', mobileNumber: '', amount: '', image: ""}]); 
    };



    return (
        <div>        
        <h2 className="page_heading">Recharge</h2>

       {
           inputList.map((form, idx)=>{
               
            return(
                <div id="duplicated_cards_container" key={idx}>
                    
                    <div className="card my-8 flex flex-col gap-8 lg:max-w-2xl justify-between" id="duplicater0">
                        {
                            inputList.length > 1
                            ? <p className="text-primary text-right" id="removebtn" onClick={()=>{handleRemoveClick(idx)}}>Remove</p>
                            : ""
                        }
                        <div className="flex flex-row items-center gap-4 overflow-x-auto overflow-y-hidden w-full sm:w-full flex-nowrap lg:px-0">
                        <label className="relative">
                            <input 
                            type="radio" 
                            className="input absolute z-20 inset-0 w-full h-full opacity-0 recharge_form" name="recharge-type" 
                            onChange={e => {
                                handleChange(e, idx)
                            }}
                            value="Airtime"
                            checked
                            />
                            <span className="card checkmark input flex flex-col justify-center items-center min-w-[8rem] h-32 lg:w-32 lg:h-32">
                            <Image src={AirtimeSVG} alt="Buy Airtime" width='60' />
                            <p className="text-center">Airtime</p>
                            </span>
                        </label>
                        <label className="relative">
                            <input 
                            type="radio" 
                            className="input absolute z-20 inset-0 w-full h-full opacity-0 recharge_form" name="recharge-type" 
                            onChange={e => {
                                handleChange(e, idx)
                            }}
                            value="Data"
                            
                            />
                            <span className="card checkmark input flex flex-col justify-center items-center min-w-[8rem] h-32 lg:w-32 lg:h-32">
                            <Image src={DataSVG} alt="Buy Data" width='60' />
                            <p className="text-center">Data</p>
                            </span>
                        </label>
                        </div>
    
    
                        <Formik
                            initialValues={[...inputList]}
                            validate={values => {
                                const errors = {};
                                if (!values.name) {
                                errors.name = 'Select a Network';
                                } 
                                if (!values.mobileNumber) {
                                errors.mobileNumber = 'Required';
                                } 
                                if (!values.amount) {
                                errors.amount = 'Required';
                                } 
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                isValid,
                                validateForm,
                                setFieldValue,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
    
                                <div>
                                    <p className="text-lg font-extrabold">Choose Mobile Network</p>
                                    <div className="flex flex-row items-center sm:justify-between gap-4 overflow-x-auto overflow-y-hidden w-full sm:w-full flex-nowrap lg:px-0">

                                        {
                                            Networks.map((network, e)=>{    
                                                                        
                                            return(
                                                <label className="relative" key={network.id}>
                                                    <input 
                                                    type="radio" 
                                                    className="input absolute z-20 inset-0 w-full h-full opacity-0 recharge_form recharge_form_radio" 
                                                    name="name"
                                                    onChange={e => {
                                                        handleSelectChange(e, idx)
                                                        setFieldValue(e.target.name, e.target.value)
                                                    }}
                                                    value={network.name}
                                                    logo={network.logo}
                                                    />
                                                    <span className="card input checkmark flex justify-center items-center min-w-[8rem] h-32 lg:w-32 lg:h-32">
                                                    <Image src={network.logo} alt={network.name} width='60' height='100' />
                                                    </span>
                                                </label>
                                            )

                                            })
                                        }

                                    </div>
                                    <p className="text-red-600">{errors.name && touched.name && errors.name}</p>
                                </div>                    
    
                                <div className="flex flex-col w-full lg:w-1/2">
                                    <label className="font-bold">Enter Mobile Number</label>
                                    <input
                                        type="number"
                                        name="mobileNumber"
                                        onChange={e => {
                                            handleChange(e, idx)
                                            setFieldValue(e.target.name, e.target.value)
                                        }}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        pattern="[0]{1}[7-9]{1}[1-9]{9}"
                                        placeholder=""
                                        className="input recharge_form"
                                    />
                                    <p className="text-red-600">{errors.mobileNumber && touched.mobileNumber && errors.mobileNumber}</p>
                                </div>
    
                                <div className="flex flex-col w-full lg:w-1/2">
                                    <label className="font-bold">Enter Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        onChange={e => {
                                            handleChange(e, idx)
                                            setFieldValue(e.target.name, e.target.value)
                                        }}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder=""
                                        className="input recharge_form"
                                    />
                                    <p className="text-red-600">{errors.amount && touched.amount && errors.amount}</p>
                                </div>
                                    
                                <div className="flex flex-row items-start gap-2 w-full lg:w-1/2 ">
                                    <Image src={AlertIcon} alt="" width="30" height="30" />
                                    <span className="text-xs">Want to recharge on a new phone or buy different plan on a old phone</span>                       
                                </div>  
    
                                {
                                    <p 
                                    className="font-extrabold text-primary underline mt-4" 
                                    // onClick={()=>{validateForm().then(()=> {handleAddClick()})}}
                                    onClick={()=>                                        
                                        handleAddClick()
                                    }
                                    >Recharge More</p> //find parameter to tie to so it will not show in the first case before validation proceed
                                }
                                                                          
                                </form>
                            )}
                            </Formik>
    
                            
                        </div>
                </div>
                )
           })
       }
        <div>
            <button type="submit" className="btn flex justify-center items-center" onClick={()=>{
                handleAddClick()
                const list = [...inputList];
                list.splice(inputList.length, 1); //remove the last created form
                setInputList(list);
                router.push("/recharge/checkout")
            }}>
            Proceed to Checkout
            </button>
        </div>
        </div>
    )
}

export default BuyData
