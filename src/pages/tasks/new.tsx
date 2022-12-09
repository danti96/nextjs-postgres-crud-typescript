import React from 'react'
import { Card, Form, TextArea } from 'semantic-ui-react'

export default function newPage() {
    return (
    <div>
        <Card>
            <Card.Content>
                <Form>
                    <Form.Field>
                        <label htmlFor="title">Title: </label>
                        <input type="text" placeholder="Write your title" name="title"/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="description">Description: </label>
                        <TextArea name="description" id="description" cols={40} rows={4} placeholder="Write your title"></TextArea>
                    </Form.Field>
                </Form>
            </Card.Content>
        </Card>
    </div>
    );
}