import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'; //сгенерированный рандои ID
            const filePath = path.resolve('static', fileName);//кроссплатформенный путь одинаковый на всез ОС
            file.mv(filePath); //у вайла вызывать функцию move и передаем путь
            return fileName;
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileService();