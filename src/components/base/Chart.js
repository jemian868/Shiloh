import { AreaChart,
         BarChart,
         PieChart,
         Area,
         XAxis,
         YAxis,
         CartesianGrid,
         Tooltip,
         Pie,
         Bar,
         Cell
} from 'recharts';

const chart = (props) => {
    switch (props.type) {
        case 'area':
            return(
                <center>
                    <AreaChart width={props.width} height={props.height} data={props.data} margin={{ top: 10, right: 30, left: 20, bottom: 5}} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </center>
            )
        
        case 'bar':
            const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'green', 'pink']

            const getPath = (x, y, width, height) => {
                return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
                ${x + width / 2}, ${y}
                C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
                Z`
            }
            
            const TriangleBar = (props) => {
                const { fill, x, y, width, height } = props
                return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
            }

            return(
                <center>
                    <BarChart width={props.width} height={props.height} data={props.data} margin={{top: 25, right: 30, left: 0, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {props.data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index % 20]} />))}
                        </Bar>
                    </BarChart>
                </center>
            )
            
        case 'pie':
            const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
            
            const RADIAN = Math.PI / 180;
            const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                    </text>
                );
            };
            return(
                <center>
                    <PieChart width={props.width} height={props.height}>
                        <Tooltip />
                        <Pie data={props.data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey="value">
                            {props.data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </center>
            )

        default:
            break
    }
}

export default chart