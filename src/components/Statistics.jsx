import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Statistics = () => {
  // Datos de estadísticas simples
  const stats = [
    { label: 'Usuarios Creados', value: '1000' },
    { label: 'Docentes Registrados', value: '150' },
    { label: 'Estudiantes con Suscripción Anual', value: '300' },
    { label: 'Estudiantes Becados', value: '50' },
  ];

  // Estado para el filtro de ingresos (Mensual / Anual)
  const [incomeFilter, setIncomeFilter] = useState('monthly'); // Filtro por defecto

  // Datos para el gráfico de ingresos según el filtro
  const chartDataIncome = {
    monthly: [1200, 2200, 1300, 4500, 2300, 3600, 4800],
    annual: [50000, 60000, 45000, 80000, 73000, 69000, 78000],
  };

  const chartDataIncomeSeries = incomeFilter === 'monthly'
    ? chartDataIncome.monthly
    : chartDataIncome.annual;

  const chartOptionsIncome = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#6A5FAC'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    xaxis: {
      categories: incomeFilter === 'monthly' ? ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'] : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      min: 0,
      title: {
        text: incomeFilter === 'monthly' ? 'Ingresos Diarios' : 'Ingresos Anuales',
      },
    },
    markers: {
      size: 5,
    },
  };

  // Datos para el gráfico de estudiantes becados
  const chartDataScholarship = {
    series: [40, 60],
    labels: ['Becados', 'No Becados'],
  };

  const chartOptionsScholarship = {
    chart: {
      type: 'donut',
      width: 380,
    },
    colors: ['#6A5FAC', '#9A8FC3'],
    legend: {
      show: true,
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Estadísticas</h2>

      {/* Estadísticas Simples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium">{stat.label}</h3>
            <p className="text-xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Gráfico de Ingresos con Filtro */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">Ingresos</h3>
          <div>
            <button
              className={`mr-2 ${incomeFilter === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setIncomeFilter('monthly')}
            >
              Mensual
            </button>
            <button
              className={`${incomeFilter === 'annual' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setIncomeFilter('annual')}
            >
              Anual
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Chart options={chartOptionsIncome} series={[{ name: 'Ingresos', data: chartDataIncomeSeries }]} type="line" height={350} />
        </div>
      </div>

      {/* Gráficos de Área y Becas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Gráfico de Usuarios por Área (Estudiantes Suscripción Anual) */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Estudiantes con Suscripción Anual</h3>
          <Chart options={chartOptionsIncome} series={[{ name: 'Suscripción Anual', data: [50, 60, 70, 80, 100, 120, 150] }]} type="area" height={350} />
        </div>

        {/* Gráfico de Estudiantes Becados */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Estudiantes Becados</h3>
          <Chart options={chartOptionsScholarship} series={chartDataScholarship.series} type="donut" width={340} />
        </div>
      </div>

      {/* Gráfico de Barras para Usuarios y Docentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Gráfico de Usuarios Creados */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Usuarios Creados por Mes</h3>
          <Chart options={chartOptionsIncome} series={[{ name: 'Usuarios Creados', data: [120, 150, 180, 200, 230, 250, 300] }]} type="bar" height={350} />
        </div>

        {/* Gráfico de Docentes Registrados */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Docentes Registrados</h3>
          <Chart options={chartOptionsIncome} series={[{ name: 'Docentes', data: [30, 35, 40, 50, 60, 70, 90] }]} type="bar" height={350} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
