import React from "react";
import { GetProducts } from '../api/product_api';

export class Product extends React.Component{
constructor(){
    super()
    this.state={
        data:[{
                index: null,
                type: null,
                name: null,
                cost: null
            }
        ]}
    }
    componentWillMount() {
        const products = GetProducts();
        products.then((res) => {
            res.data.forEach(element => {
                console.log(element);
                this.setState(prevState => ({
                    data: [...prevState.data, element.id]
                    })
                );
            });
        });
    }
    render() {
        return(
            <div className="container">
                <h2> Products </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Numb</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((element) => 
                            <tr>
                                <td>{element.index}</td>
                                <td>{element.type}</td>
                                <td>{element.name}</td>
                                <td>{element.cost}</td>
                            </tr>)
                        }
                    </tbody>
                        
                </table>
                
            </div>
        )
    }
}