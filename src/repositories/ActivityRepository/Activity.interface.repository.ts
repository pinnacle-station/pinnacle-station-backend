import { ActivitiesUpdateDTO } from 'src/dtos/Activities/Activities.update.dto';
import { BadgeOnActivityDTO } from 'src/dtos/BadgeOnActivity/BadgeOnActivity.dto';
import { ActivityModel } from 'src/models/Activities.model';

export interface IActivityRepository {
  create(data: ActivityModel): Promise<ActivityModel>;
  updateById(
    id: string,
    activityUpdateDTO: ActivitiesUpdateDTO,
  ): Promise<ActivityModel>;
  getAllRegisters(filters?: object): Promise<ActivityModel[]>;
  getById(id: string): Promise<ActivityModel>;
  deleteById(id: string): void;
  createBadgeForActivity(data: BadgeOnActivityDTO): Promise<BadgeOnActivityDTO>;
}
