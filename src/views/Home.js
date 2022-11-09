import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            list: []
        }
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            value: e.target.toDo.value,
            id: 1 + Math.random() // Assign id's to later filter out this id when deleting (if two items are the same it will delete specific id)
        }
        const list = [...this.state.list]; //Makes sure that the list remembers what was put into it previously and continues to add on

        list.push(newItem)

        this.setState({ list })

    };

    deleteItem = (id) => {
        const list = [...this.state.list];

        const newList = list.filter(item => item.id !== id)

        this.setState({ list: newList });
    }



    render() {
        console.log(this.state.list)
        return (
            <div className='toDoListContainer'>
                <h2>To-Do List</h2>
                <div className="toDoList">
                    <div className='toDoHeader'>
                        What's do you need to do today?
                    </div>
                    <form className='itemInputBox' onSubmit={(e) => { this.addItem(e) }}>
                        <input name='toDo' placeholder='Enter something...' />
                        <button type='submit'>Add To List</button>
                    </form>

                    <ul className='listBox'>
                        {this.state.list.map(item => {
                            return (
                                <li key={item.id}>{item.value}<button onClick={() => { this.deleteItem(item.id) }}>
                                    Completed
                                </button></li>
                            )
                        })}</ul>
                </div>
            </div>
        )
    }
}
