import pool from './db';

export async function getComponentData<T>(id: string, defaultData: T): Promise<T> {
  try {
    const [rows] = await pool.execute('SELECT data FROM components_data WHERE id = ?', [id]);
    const resultSet = rows as any[];
    
    if (resultSet && resultSet.length > 0) {
      const data = resultSet[0].data;
      // Depending on mysql2 configuration, JSON could be returned as a string or a parsed object
      if (typeof data === 'string') {
        return JSON.parse(data) as T;
      }
      return data as T;
    }
  } catch (error) {
    console.error(`Error fetching component data for ${id}:`, error);
  }
  
  // Return default fallbacks if not found or if there was an error
  return defaultData;
}
