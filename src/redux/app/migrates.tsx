// migrations.ts
const migrations = {
    1: (state: any) => {
      // Perform any migration steps from version 1 to the current version (e.g., adding or removing properties)
      return {
        ...state,
        // Add or update properties as needed
      };
    },
    // Add more migration functions for each version, if needed
  };
  
  export default migrations;
  