import React,{useState} from 'react';
type MyFormProps={
    onSubmit: (fom:{name:string;discription:string}) => void;
};
function MyForm({onSubmit}:MyFormProps){
   
    const [form,setForm] = useState({
        name:"",
        discription:""
    });
    const {name,discription} = form;
    const onChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit= (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onSubmit(form);
        setForm({name:"",discription:""});
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="discription" value={discription} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    );
}
export default MyForm;
