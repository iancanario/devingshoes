import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

function Cart() {
	return (
    <Container>
        <ProductTable>
            <thead>
                <tr>
                    <th/>
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img
                            src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_detalhe1.jpg?ts=1571078789?ims=280x280"
                            alt="Tênis"
                        />
                    </td>
                    <td>
                        <strong>Tênis Topzera</strong>
                        <span>R$249,99</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#03d361"/>
                            </button>
                            <input type="number" readOnly value={2}/>
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#03d361"/>
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$499,98</strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="#03d361" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </ProductTable>

        <footer>
            <button type="button">Finalizar pedido</button>

            <Total>
                <span>TOTAL</span>
                <strong>R$1556,90</strong>
            </Total>
        </footer>
    </Container>);
}

export default Cart;
