class Produto{

    constructor() {
        this.id = 1;
        this.arrayProduto = [];
        this.editId = null;
    }

    cadastrar() {
       let produto = this.lerDados();

       if (this.validaCampos(produto)) {
           if(this.editId == null) {
            this.adicionar(produto);
           } else {
               this.atualizar(this.editId, produto);
           }
       }

       this.listaTabela();
       this.cancelar();
       
       
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProduto.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_peso = tr.insertCell();
            let td_altura = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProduto[i].id;
            td_peso.innerText = this.arrayProduto[i].peso;
            td_altura.innerText = this.arrayProduto[i].altura;

            td_id.classList.add('center')

           let imgEdit = document.createElement('img');
           imgEdit.src = '../imagem/editar.png';
           td_acoes.appendChild(imgEdit);
           imgEdit.setAttribute("onclick", "produto.editar("+ JSON.stringify(this.arrayProduto[i]) +")");

           let imgDel = document.createElement('img');
           imgDel.src = '../imagem/excluir.png';
           td_acoes.appendChild(imgDel);
           imgDel.setAttribute("onclick", "produto.deletar("+ this.arrayProduto[i].id +")");
        }
    }

    adicionar(produto){
        this.arrayProduto.push(produto);
        this.id++;
    }
    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProduto.length; i++) {
            if (this.arrayProduto [i].id == id) {
                this.arrayProduto[i].peso = produto.peso;
                this.arrayProduto[i].altura = produto.altura;
            }
        }
    }

    editar(dados) {
        this.editID = dados.id;
        document.getElementById('novo').value = dados.peso;
        document.getElementById('altura').value = dados.altura;

        document.getElementById('btn1').innerText = 'atualizar'
    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.peso = document.getElementById('novo').value;
        produto.altura = document.getElementById('altura').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.peso == '') {
            msg += ' informe o peso \n';
        }
        if (produto.altura == '') {
            msg += ' informe altura \n';
        }
        if(msg != '') {
            alert(msg);
            return false
        }
        return true;
    }
    cancelar(){
        document.getElementById('novo').value = '';
        document.getElementById('altura').value = '';

        document.getElementById('btn1').innerText = 'cadastrar'
        this.editId = null;
    }

    deletar(id) {
    if (confirm('Realmente deseja deletar esse item ?')) {
        let tbody = document.getElementById('tbody');
        for (let i = 0; i < this.arrayProduto.length; i++) {
            if (this.arrayProduto[i].id == id) {
                this.arrayProduto.splice(i,1);
            tbody.deleteRow(i);
            }
        }
    }
    }
}

var produto = new Produto();