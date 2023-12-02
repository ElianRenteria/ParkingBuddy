class ParkingService {
  static baseURL: string = 'https://api.streetsoncloud.com/pl1';
  static options: {
    method: string;
    headers: {
      'Content-Type': string;
      'X-API-Key': string;
    };
  } = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'UZac6aeCFm2iL4e8JtoAT8mCPYYMzxiy2bpYDvym',
    },
  };

  static async getOverview(): Promise<any> {
    const response = await fetch(`${this.baseURL}/multi-lot-info`, this.options);
    if (response.status === 200) {
      const jsonData = await response.json();
      //console.log(jsonData);
      return jsonData;
    }
    throw new Error('The Parking Service returned an unexpected HTTP response code.');
  }
}

// ParkingService.getOverview();

export default ParkingService;
  