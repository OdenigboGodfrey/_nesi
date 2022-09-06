export class MockRepo<T>  {
    dataStore: T[] = [];
    async create(dto: T) {
        this.dataStore.push(dto);
        return dto;
    }

    async findOneById(id: string) {
        return this.dataStore.filter(x => x['uuid'] == id)[0];
    } 
    async findByCondition() {
        return this.dataStore[0];
    }
    
    async findAll(){
        return this.dataStore;
    }

    async remove(id: string){
        this.dataStore = this.dataStore.filter(x => x['uuid'] != id);
    }

    async deleteOne(id: string) {
        
    }
    
    getRepo(){
        return {
            updateOne: (id, dto) => {
                this.dataStore.filter(x => x['uuid'] == id)[0] = dto;
            }
        }
    }

    findOneByCondition(payload: any) {
        return this.dataStore[0];
    }
}
