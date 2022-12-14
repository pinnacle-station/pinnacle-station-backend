import { v4 as uuid } from 'uuid';

class SquadModel {
  id: string;
  name: string;
  product_manager: string;
  tech_manager: string;
  initial_time?: Date;
  description: string;
  members: string[];
  created_at?: Date;
  updated_at?: Date;

  constructor(props: Omit<SquadModel, 'id' | 'created_at'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.created_at = new Date();
    }
  }
}

export { SquadModel };
