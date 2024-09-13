import { Alert } from "react-bootstrap";
import FormCadProdutos from "./Formularios/FormCadProduto";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import {produtos} from "../../dados/mockProdutos";

export default function TelaCadastroProduto(props) {
    const [exibirTAbela, setExibirTabela] = useState(true);

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                {
                    exibirTAbela ?
                    <TabelaProdutos listaDeProdutos={produtos} setExibirTabela={setExibirTabela}/> :
                    <FormCadProdutos listaDeProdutos={produtos} setExibirTabela={setExibirTabela}/>
                    /*
                    Se                  então           se não   então
                    exibirTAbela ?  <TabelaProdutos/>    :       <FormCadProdutos />
                    */
                }
            </Pagina>
        </div>
    );
}