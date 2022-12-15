import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Card, Form, TextArea, Icon } from 'semantic-ui-react'
import { Tasks } from "src/interface/Tasks";

export default function newPage() {

    const [task, setTask] = useState({
        title:"",
        description:""
    });
    const handleChange = ({target:{name, value}}:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setTask({...task,[name]:value})
    }

    const createTask = async (task: Tasks)=>{
        await fetch('http://localhost:3000/api/tasks',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(task)
        })
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            createTask(task)
        } catch (error:any) {
            console.log(error)
        }
    }
    return (
    <div>
        <Card>
            <Card.Content>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label htmlFor="title">Title: </label>
                        <input type="text" placeholder="Write your title" name="title" onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="description">Description: </label>
                        <TextArea name="description" id="description" cols={40} rows={4} placeholder="Write your title" onChange={handleChange}></TextArea>
                    </Form.Field>
                    <Button>
                        <Icon name="save"/>
                        Guardar
                    </Button>
                </Form>
            </Card.Content>
        </Card>
    </div>
    );
}