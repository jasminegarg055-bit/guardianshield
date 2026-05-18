import React from "react";


export default function Orphanage() {
    return (
        <div className="orphanage-main-container">

            {/* Hero Section */}
            <div className="orphanage-hero-section">

                <h1 className="orphanage-main-heading">
                    Children Homes for Children in Need of Care & Protection
                </h1>

                <p className="orphanage-hero-text">
                    Children's homes provide safe care, protection, emotional support,
                    and better opportunities for children facing difficult situations.
                </p>

            </div>

            {/* Content Card */}
            <div className="orphanage-content-card">

                {/* Benefits */}
                <section className="orphanage-section">
                    <h3 className="orphanage-section-title">Benefits</h3>

                    <ol className="orphanage-list">
                        <li>
                            To provide immediate help to children in vulnerable situations.
                        </li>

                        <li>
                            To fulfill basic needs like food, clothing, shelter,
                            education, and medical care.
                        </li>
                    </ol>
                </section>

                <hr className="orphanage-divider" />

                {/* Eligibility */}
                <section className="orphanage-section">
                    <h3 className="orphanage-section-title">Eligibility</h3>

                    <p className="orphanage-text">
                        Children who are in need of care and protection are eligible.
                    </p>
                </section>

                <hr className="orphanage-divider" />

                {/* Documents */}
                <section className="orphanage-section">
                    <h3 className="orphanage-section-title">Documents</h3>

                    <p className="orphanage-text">
                        No document is required.
                    </p>
                </section>

                <hr className="orphanage-divider" />

                {/* Contact */}
                <section className="orphanage-section">
                    <h3 className="orphanage-section-title">Whom to Contact</h3>

                    <ul className="orphanage-list">
                        <li>District Programme Officer</li>
                        <li>District Child Protection Officer</li>
                    </ul>

                    <p className="orphanage-highlight-text">
                        <strong>Helpline No:</strong> 1098
                    </p>
                </section>

                <hr className="orphanage-divider" />

                {/* Grievances */}
                <section className="orphanage-section">
                    <h3 className="orphanage-section-title">
                        Grievances Redressal
                    </h3>

                    <ul className="orphanage-list">
                        <li>District Programme Officer</li>
                        <li>District Child Protection Officer</li>
                        <li>Concerned Deputy Commissioner</li>
                    </ul>

                    <p className="orphanage-highlight-text">
                        <strong>Head Office Helpline:</strong> 0172-2608746
                    </p>
                </section>

                <hr className="orphanage-divider" />

                {/* Email */}
                <section className="orphanage-section">
                    <h3 className="orphanage-section-title">Email</h3>

                    <p className="orphanage-email">dsswcd@punjab.gov.in</p>
                    <p className="orphanage-email">icpspunjab@gmail.com</p>
                    <p className="orphanage-email">theshield@gmail.com</p>
                </section>

                <hr className="orphanage-divider" />

                {/* Table */}
                <section className="orphanage-section">

                    <h3 className="orphanage-table-title">
                        List of Children Homes
                    </h3>

                    <div className="orphanage-table-wrapper">

                        <table className="orphanage-table">

                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>District</th>
                                    <th>Name of Home</th>
                                    <th>Address</th>
                                    <th>Age Group</th>
                                    <th>Capacity</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Jalandhar</td>
                                    <td>Children Home for Girls</td>
                                    <td>Gandhi Vanita Ashram, Kapurthala Chowk</td>
                                    <td>-</td>
                                    <td>100</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Bathinda</td>
                                    <td>Children Home (Boys)</td>
                                    <td>Red Cross Building, Opposite Police Line</td>
                                    <td>-</td>
                                    <td>50</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Ludhiana</td>
                                    <td>Children Home (Boys)</td>
                                    <td>Braille Bhawan Complex, Chandigarh Road</td>
                                    <td>6-18 Years</td>
                                    <td>50</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Patiala</td>
                                    <td>Children Home Rajpura</td>
                                    <td>Near Mini Secretariat</td>
                                    <td>-</td>
                                    <td>50</td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>Gurdaspur</td>
                                    <td>Children Home Gurdaspur</td>
                                    <td>Kothi No.21A, Central Jail Road</td>
                                    <td>-</td>
                                    <td>50</td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>Hoshiarpur</td>
                                    <td>Children Home for Boys</td>
                                    <td>Ram Colony Camp, Chandigarh Road</td>
                                    <td>-</td>
                                    <td>100</td>
                                </tr>

                                <tr className="orphanage-total-row">
                                    <td colSpan="5">Total Capacity</td>
                                    <td>500</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </section>

            </div>

        </div>
    );
}