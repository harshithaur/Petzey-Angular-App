import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppointmentDTO } from '../Models/AppointmentDTO';

@Injectable({
    providedIn: 'root'
})

export class AppointmentService {
    constructor(private http: HttpClient) {
    }

    getAppointmentByDoctorId(id: Number) {
        const url = `${environment.AppointmentMockUrl}Appointment/Doctor/${id}`;
        return this.http.get(url);
    }
    createAppointment(data: any) {
        const url = `${environment.AppointmentMockUrl}Appointment`;
        return this.http.post(url, data);
    }
    getAppointmentByParentId(id: Number) {
        const url = `${environment.AppointmentMockUrl}Appointment/Owner/${id}`;
        return this.http.get(url);
    }
    updateAppointment(id: Number, data: any) {
        const url = `${environment.AppointmentMockUrl}Appointment/${id}`;
        return this.http.put(url, data);
    }
}
