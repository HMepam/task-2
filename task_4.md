## <p style="color:#1a9cb0;">PREREQUISITES: </p>
The task is a continuation of Homework3and should be done in the same repo.

## <p style="color:#1a9cb0;">TASK 4.1</p>
Add Groupentity to already existing REST service with CRUD operations.
* TheGroup entity should have the following properties(you can use UUIDas Group id):
  - ```
    type Permission  = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';
    
    type Group = {
      id: string;
      name: string;
      permissions: Array<Permission>;
    };
    ``` 
* The service should provide the following CRUD operations for Group:
  - get group by id;
  - get all groups;
  - create and update a group;
  - remove group (hard delete–group data is fully removed from the DB).
* Storing of groups data should be done in PostgreSQL in Groups table.
* The service should follow the principles of 3-layer architecture.    

## <p style="color:#1a9cb0;">TASK 4.2</p>
Link User records in one table with Group records in another table.
* Add a UserGroup table(“many-to-many” relationship) which will store the data describing which users are assigned to which group.
* If any record gets removed from the DB, then all linked records should be removed from UserGroupas well.

## <p style="color:#1a9cb0;">TASK 4.3</p>
Add addUsersToGroup(groupId, userIds)method which will allow adding users to a certain group.Use transactions to save records in DB.

