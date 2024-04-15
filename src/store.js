// Cominciamo con importare la 'reactive' da Vue, questo metodo è fisso e sarà sempre così

import { reactive } from 'vue'

// Esportiamo lo store in modo da poterlo utilizzare nei components che mi servono

export const store = reactive({
    apiUrl : 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    
})