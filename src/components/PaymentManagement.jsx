import React, { useState } from 'react';
import Chart from 'react-apexcharts'; // Importa el gráfico de pagos

const PaymentManagement = () => {
  // Estado para gestionar los detalles del pago seleccionado
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Datos de los pagos con métodos de pago y detalles adicionales
  const payments = [
    { 
      name: 'Juan Pérez', 
      email: 'juanperez@example.com', 
      plan: 'Plan Individual', 
      price: '200 soles', 
      paymentMethod: 'Tarjeta de Crédito', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'Pagado' 
    },
    { 
      name: 'Ana Gómez', 
      email: 'anagomez@example.com', 
      plan: 'Plan Duo', 
      price: '250 soles', 
      paymentMethod: 'PayPal', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'Pagado' 
    },
    { 
      name: 'Carlos Díaz', 
      email: 'carlosdiaz@example.com', 
      plan: 'Plan Familiar', 
      price: '500 soles', 
      paymentMethod: 'Transferencia Bancaria', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'No Pagado' 
    },
    { 
      name: 'María García', 
      email: 'mariagarcia@example.com', 
      plan: 'Curso Individual', 
      price: '5 soles', 
      paymentMethod: 'Efectivo', 
      invoiceDate: 'Ene 13, 2025', 
      status: 'Pendiente' 
    },
  ];

  // Datos para el gráfico de pagos
  const paymentChartData = {
    series: [
      {
        name: 'Pagos Totales',
        data: [5000, 7000, 8000, 6000, 9000, 8500, 11000], // Datos de ejemplo
      },
    ],
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'], // Meses
  };

  // Opciones para el gráfico de pagos
  const paymentChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#6A5FAC'], // Color morado
    xaxis: {
      categories: paymentChartData.categories,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: true,
    },
  };

  // Función para ver detalles de un pago
  const viewDetails = (payment) => {
    setSelectedPayment(payment);
  };

  return (
    <div className="rounded-lg border border-purple-400 bg-white px-5 pt-6 pb-2.5 shadow-lg">
      {/* Tabla de pagos */}
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-purple-100 text-left">
              <th className="min-w-[220px] py-4 px-4 font-medium text-purple-900">Usuario</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-purple-900">Correo</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-purple-900">Plan</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-purple-900">Precio</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-purple-900">Método de Pago</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-purple-900">Fecha de Factura</th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-purple-900">Estado</th>
              <th className="py-4 px-4 font-medium text-purple-900">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-t">
                <td className="py-5 px-4">
                  <h5 className="font-medium text-purple-800">{payment.name}</h5>
                </td>
                <td className="py-5 px-4">
                  <p className="text-purple-700">{payment.email}</p>
                </td>
                <td className="py-5 px-4">
                  <p className="text-purple-700">{payment.plan}</p>
                </td>
                <td className="py-5 px-4">
                  <p className="text-purple-700">{payment.price}</p>
                </td>
                <td className="py-5 px-4">
                  <p className="text-purple-700">{payment.paymentMethod}</p>
                </td>
                <td className="py-5 px-4">
                  <p className="text-purple-700">{payment.invoiceDate}</p>
                </td>
                <td className="py-5 px-4">
                  <span
                    className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                      payment.status === 'Pendiente'
                        ? 'bg-yellow-100 text-yellow-500'
                        : payment.status === 'No Pagado'
                        ? 'bg-red-100 text-red-500'
                        : 'bg-green-100 text-green-500'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center space-x-3.5">
                    {/* Botón para ver detalles */}
                    <button onClick={() => viewDetails(payment)} className="hover:text-purple-600">
                      Ver Detalles
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de detalles del pago */}
      {selectedPayment && (
        <div className="mt-8 p-6 bg-purple-100 rounded-lg">
          <h3 className="text-lg font-bold text-purple-900">Detalles del Pago</h3>
          <p><strong>Nombre:</strong> {selectedPayment.name}</p>
          <p><strong>Correo:</strong> {selectedPayment.email}</p>
          <p><strong>Plan:</strong> {selectedPayment.plan}</p>
          <p><strong>Precio:</strong> {selectedPayment.price}</p>
          <p><strong>Método de Pago:</strong> {selectedPayment.paymentMethod}</p>
          <p><strong>Fecha de Factura:</strong> {selectedPayment.invoiceDate}</p>
          <p><strong>Estado:</strong> {selectedPayment.status}</p>
          <button onClick={() => setSelectedPayment(null)} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
            Cerrar
          </button>
        </div>
      )}

      {/* Gráfico de pagos */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold text-purple-600 mb-4">Gráfico de Pagos</h2>
        <Chart options={paymentChartOptions} series={paymentChartData.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default PaymentManagement;
